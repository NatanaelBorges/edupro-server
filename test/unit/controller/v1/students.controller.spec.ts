import { createMock } from '@golevelup/ts-jest';
import { IStudentsService } from '@application/interfaces/IStudents.service';
import { CreateStudentViewModel } from '@application/view-models/students/create-student.view-model';
import {
  StudentFilter,
  StudentsViewModel,
} from '@application/view-models/students/student.view-model';
import { StudentsController } from '@controller/v1/students.controller';
import { BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { ApiResponsePayload } from '@infrastructure/helpers/common/documentation';
import { UpdateStudentViewModel } from '@application/view-models/students/update-student.view-model';

describe('StudentsController', () => {
  let controller: StudentsController;
  let service: IStudentsService;

  beforeEach(async () => {
    service = createMock<IStudentsService>();
    controller = new StudentsController(service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new student', async () => {
      // Arrange
      const createStudentViewModel: CreateStudentViewModel = {
        firstName: 'John',
        lastName: 'Smith',
        email: 'john@smith.com',
      };

      const createdStudent: StudentsViewModel = {
        id: '1',
        active: true,
        createdAt: new Date(),
        ...createStudentViewModel,
      };

      jest.spyOn(service, 'create').mockResolvedValueOnce(createdStudent);

      // Act
      const result = await controller.create(createStudentViewModel);

      // Assert
      expect(result).toBeInstanceOf(ApiResponsePayload);
      expect(result.data).toEqual(createdStudent);
      expect(result.message).toBe('Student created');
      expect(result.statusCode).toBe(HttpStatus.CREATED);
      expect(service.create).toHaveBeenCalledWith(createStudentViewModel);
    });

    it('should return a bad request error if invalid data is provided', async () => {
      // Arrange
      const createStudentViewModel: CreateStudentViewModel = {
        firstName: '',
        lastName: 'Smith',
        email: 'john@smith.com',
      };

      jest
        .spyOn(service, 'create')
        .mockRejectedValueOnce(new BadRequestException('Invalid data'));

      // Act and Assert
      await expect(
        controller.create(createStudentViewModel),
      ).rejects.toThrowError(
        new HttpException(
          new ApiResponsePayload<StudentsViewModel>(
            null,
            'Invalid data',
            HttpStatus.BAD_REQUEST,
          ),
          HttpStatus.BAD_REQUEST,
        ),
      );
      expect(service.create).toHaveBeenCalledWith(createStudentViewModel);
    });

    it('should return an internal server error if an error occurs during creation', async () => {
      // Arrange
      const createStudentViewModel: CreateStudentViewModel = {
        firstName: 'John',
        lastName: 'Smith',
        email: 'john@smith.com',
      };

      jest
        .spyOn(service, 'create')
        .mockRejectedValueOnce(new Error('Internal server error'));

      // Act and Assert
      await expect(
        controller.create(createStudentViewModel),
      ).rejects.toThrowError(
        new HttpException(
          new ApiResponsePayload<StudentsViewModel>(
            null,
            'Internal server error',
            HttpStatus.INTERNAL_SERVER_ERROR,
          ),
          HttpStatus.INTERNAL_SERVER_ERROR,
        ),
      );
      expect(service.create).toHaveBeenCalledWith(createStudentViewModel);
    });
  });

  describe('findAll', () => {
    it('should return an internal server error if an error occurs during student retrieval', async () => {
      // Arrange
      const filter: StudentFilter = {
        orderBy: 'name',
        firstName: '',
        lastName: '',
        email: '',
        active: false,
      };

      jest
        .spyOn(service, 'findAll')
        .mockRejectedValueOnce(new Error('Internal server error'));

      // Act and Assert
      await expect(controller.findAll(filter)).rejects.toThrowError(
        new HttpException(
          new ApiResponsePayload<StudentsViewModel[]>(
            null,
            'Internal server error',
            HttpStatus.INTERNAL_SERVER_ERROR,
          ),
          HttpStatus.INTERNAL_SERVER_ERROR,
        ),
      );
      expect(service.findAll).toHaveBeenCalledWith(filter);
    });

    it('should return an array of students', async () => {
      // Arrange
      const filter: StudentFilter = {
        orderBy: 'name',
        firstName: '',
        lastName: '',
        email: '',
        active: false,
      };

      const students: StudentsViewModel[] = [
        {
          id: '1',
          active: true,
          createdAt: new Date(),
          firstName: 'John',
          lastName: 'Smith',
          email: 'john@smith.com',
        },
        {
          id: '2',
          active: true,
          createdAt: new Date(),
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane@doe.com',
        },
      ];

      jest.spyOn(service, 'findAll').mockResolvedValueOnce(students);

      // Act
      const result = await controller.findAll(filter);

      // Assert
      expect(result).toBeInstanceOf(ApiResponsePayload);
      expect(result.data).toEqual(students);
      expect(result.message).toBe('Success');
      expect(result.statusCode).toBe(HttpStatus.OK);
    });

    it('should throw an HttpException with status 404 if no students are found', async () => {
      // Arrange
      const filter: StudentFilter = {
        orderBy: 'name',
        firstName: '',
        lastName: '',
        email: '',
        active: false,
      };

      jest.spyOn(service, 'findAll').mockResolvedValue([]);

      // Act and Assert
      await expect(controller.findAll(filter)).rejects.toThrowError(
        new HttpException(
          new ApiResponsePayload<StudentsViewModel[]>(
            null,
            'No students found',
            HttpStatus.NOT_FOUND,
          ),
          HttpStatus.NOT_FOUND,
        ),
      );
    });
  });

  describe('findOne', () => {
    it('should find a student by id and return the student', async () => {
      // Arrange
      const studentId = '1';

      const student: StudentsViewModel = {
        id: studentId,
        active: true,
        createdAt: new Date(),
        firstName: 'John',
        lastName: 'Smith',
        email: 'john@smith.com',
      };

      jest.spyOn(service, 'findOne').mockResolvedValue(student);

      // Act
      const result = await controller.findOne(studentId);

      // Assert
      expect(result).toBeInstanceOf(ApiResponsePayload);
      expect(result.data).toEqual(student);
      expect(result.message).toBe('Success');
      expect(result.statusCode).toBe(HttpStatus.OK);
    });

    it('should throw an HttpException with status 404 if student is not found', async () => {
      // Arrange
      const studentId = '1';

      jest.spyOn(service, 'findOne').mockResolvedValue(null);

      // Act and Assert
      await expect(controller.findOne(studentId)).rejects.toThrowError(
        new HttpException(
          new ApiResponsePayload<StudentsViewModel>(
            null,
            'Student not found',
            HttpStatus.NOT_FOUND,
          ),
          HttpStatus.NOT_FOUND,
        ),
      );
    });

    it('should return a bad request if an invalid student ID is provided', async () => {
      // Arrange
      const invalidStudentId = 'invalidId';

      jest
        .spyOn(service, 'findOne')
        .mockRejectedValueOnce(new BadRequestException('Invalid data'));

      // Act and Assert
      await expect(controller.findOne(invalidStudentId)).rejects.toThrowError(
        new HttpException(
          new ApiResponsePayload<StudentsViewModel>(
            null,
            'Invalid data',
            HttpStatus.BAD_REQUEST,
          ),
          HttpStatus.BAD_REQUEST,
        ),
      );
      expect(service.findOne).toHaveBeenCalledWith(invalidStudentId);
    });

    it('should return an internal server error if an error occurs during finding a student', async () => {
      // Arrange
      const studentId = '1';

      jest
        .spyOn(service, 'findOne')
        .mockRejectedValueOnce(new Error('Internal server error'));

      // Act and Assert
      await expect(controller.findOne(studentId)).rejects.toThrowError(
        new HttpException(
          new ApiResponsePayload<StudentsViewModel>(
            null,
            'Internal server error',
            HttpStatus.INTERNAL_SERVER_ERROR,
          ),
          HttpStatus.INTERNAL_SERVER_ERROR,
        ),
      );
      expect(service.findOne).toHaveBeenCalledWith(studentId);
    });
  });

  describe('update', () => {
    it('should update a student and return the updated student', async () => {
      // Arrange
      const studentId = '1';

      const updateStudentViewModel: UpdateStudentViewModel = {
        firstName: 'UpdatedFirstName',
        lastName: 'UpdatedLastName',
        email: 'updated.email@example.com',
      };

      const updatedStudent: StudentsViewModel = {
        id: studentId,
        active: true,
        createdAt: new Date(),
        firstName: updateStudentViewModel.firstName, // Include firstName property
        lastName: updateStudentViewModel.lastName,
        email: updateStudentViewModel.email,
      };

      jest.spyOn(service, 'update').mockResolvedValue(updatedStudent);

      // Act and Assert
      await expect(
        controller.update(studentId, updateStudentViewModel),
      ).rejects.toThrowError(
        new HttpException(
          new ApiResponsePayload<StudentsViewModel>(
            null,
            'Student updated',
            HttpStatus.NO_CONTENT,
          ),
          HttpStatus.NO_CONTENT,
        ),
      );
    });

    it('should throw an HttpException with status 404 if student to update is not found', async () => {
      // Arrange
      const studentId = '1';

      const updateStudentViewModel: UpdateStudentViewModel = {
        firstName: 'UpdatedFirstName',
        lastName: 'UpdatedLastName',
        email: 'updated.email@example.com',
      };

      jest.spyOn(service, 'update').mockResolvedValue(null);

      // Act and Assert
      await expect(
        controller.update(studentId, updateStudentViewModel),
      ).rejects.toThrowError(
        new HttpException(
          new ApiResponsePayload<StudentsViewModel>(
            null,
            'Student not found',
            HttpStatus.NOT_FOUND,
          ),
          HttpStatus.NOT_FOUND,
        ),
      );
    });

    it('should return an internal server error if an error occurs during updating a student', async () => {
      // Arrange
      const studentId = '1';
      const updateStudentViewModel: UpdateStudentViewModel = {
        firstName: 'UpdatedFirstName',
        lastName: 'UpdatedLastName',
        email: 'updated.email@example.com',
      };

      jest
        .spyOn(service, 'update')
        .mockRejectedValueOnce(new Error('Internal server error'));

      // Act and Assert
      await expect(
        controller.update(studentId, updateStudentViewModel),
      ).rejects.toThrowError(
        new HttpException(
          new ApiResponsePayload<StudentsViewModel>(
            null,
            'Internal server error',
            HttpStatus.INTERNAL_SERVER_ERROR,
          ),
          HttpStatus.INTERNAL_SERVER_ERROR,
        ),
      );
      expect(service.update).toHaveBeenCalledWith(
        studentId,
        updateStudentViewModel,
      );
    });

    it('should return a bad request if an invalid student ID is provided', async () => {
      // Arrange
      const invalidStudentId = 'invalidId';
      const updateStudentViewModel: UpdateStudentViewModel = {
        firstName: 'UpdatedFirstName',
        lastName: 'UpdatedLastName',
        email: 'updated.email@example.com',
      };

      jest
        .spyOn(service, 'update')
        .mockRejectedValueOnce(new BadRequestException('Invalid data'));

      // Act and Assert
      await expect(
        controller.update(invalidStudentId, updateStudentViewModel),
      ).rejects.toThrowError(
        new HttpException(
          new ApiResponsePayload<StudentsViewModel>(
            null,
            'Invalid data',
            HttpStatus.BAD_REQUEST,
          ),
          HttpStatus.BAD_REQUEST,
        ),
      );
      expect(service.update).toHaveBeenCalledWith(
        invalidStudentId,
        updateStudentViewModel,
      );
    });
  });

  describe('remove', () => {
    it('should remove a student and return the removed student', async () => {
      // Arrange
      const studentId = '1';

      const removedStudent: StudentsViewModel = {
        id: studentId,
        active: true,
        createdAt: new Date(),
        firstName: 'John',
        lastName: 'Smith',
        email: 'john@smith.com',
      };

      jest.spyOn(service, 'remove').mockResolvedValueOnce(removedStudent);

      // Act and Assert
      await expect(controller.remove(studentId)).rejects.toThrowError(
        new HttpException(
          new ApiResponsePayload<StudentsViewModel>(
            null,
            'Student deleted',
            HttpStatus.NO_CONTENT,
          ),
          HttpStatus.NO_CONTENT,
        ),
      );
    });

    it('should throw an HttpException with status 404 if student to remove is not found', async () => {
      // Arrange
      const studentId = '1';

      jest.spyOn(service, 'remove').mockResolvedValue(null);

      // Act and Assert
      await expect(controller.remove(studentId)).rejects.toThrowError(
        new HttpException(
          new ApiResponsePayload<StudentsViewModel>(
            null,
            'Student not found',
            HttpStatus.NOT_FOUND,
          ),
          HttpStatus.NOT_FOUND,
        ),
      );
    });

    it('should return an internal server error if an error occurs during student deletion', async () => {
      // Arrange
      const studentId = '1';

      jest
        .spyOn(service, 'remove')
        .mockRejectedValueOnce(new Error('Internal server error'));

      // Act and Assert
      await expect(controller.remove(studentId)).rejects.toThrowError(
        new HttpException(
          new ApiResponsePayload<StudentsViewModel>(
            null,
            'Internal server error',
            HttpStatus.INTERNAL_SERVER_ERROR,
          ),
          HttpStatus.INTERNAL_SERVER_ERROR,
        ),
      );
      expect(service.remove).toHaveBeenCalledWith(studentId);
    });

    it('should return a bad request if an invalid student ID is provided', async () => {
      // Arrange
      const invalidStudentId = 'invalidId';

      jest
        .spyOn(service, 'remove')
        .mockRejectedValueOnce(new BadRequestException('Invalid data'));

      // Act and Assert
      await expect(controller.remove(invalidStudentId)).rejects.toThrowError(
        new HttpException(
          new ApiResponsePayload<StudentsViewModel>(
            null,
            'Invalid data',
            HttpStatus.BAD_REQUEST,
          ),
          HttpStatus.BAD_REQUEST,
        ),
      );
      expect(service.remove).toHaveBeenCalledWith(invalidStudentId);
    });
  });
});
