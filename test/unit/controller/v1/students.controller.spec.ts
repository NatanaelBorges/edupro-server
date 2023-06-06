import { StudentsController } from '@controller/v1/students.controller';
import { StudentsService } from '@application/services/students.service';
import { CreateStudentViewModel } from '@application/view-models/students/create-student.view-model';
import { UpdateStudentViewModel } from '@application/view-models/students/update-student.view-model';
import { ControllerSetup } from '@test/common/setupController';

describe('StudentsController', () => {
  let setup: ControllerSetup<StudentsController, StudentsService>;
  let controller, service;

  beforeEach(async () => {
    setup = new ControllerSetup<StudentsController, StudentsService>();
    await setup.setup(StudentsController, StudentsService);
    controller = setup.controller;
    service = setup.service;
  });

  afterEach(async () => {
    await setup.teardown();
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

      const createdStudent = {
        id: '1',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        deleted: false,
        ...createStudentViewModel,
      };

      jest.spyOn(service, 'create').mockResolvedValueOnce(createdStudent);

      // Act
      const result = await controller.create(createStudentViewModel);

      // Assert
      expect(result).toEqual(createdStudent);
      expect(service.create).toHaveBeenCalledWith(createStudentViewModel);
    });
  });

  describe('findAll', () => {
    it('should find all students', async () => {
      // Arrange
      const students = [
        {
          id: '1',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          deleted: false,
          firstName: 'John',
          lastName: 'Smith',
          email: 'john@smith.com',
        },
        {
          id: '2',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          deleted: false,
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane@doe.com',
        },
      ];

      jest.spyOn(service, 'findAll').mockResolvedValueOnce(students);

      // Act
      const result = await controller.findAll();

      // Assert
      expect(result).toEqual(students);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should find a student by id', async () => {
      // Arrange
      const studentId = '1';
      const student = {
        id: studentId,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        deleted: false,
        firstName: 'John',
        lastName: 'Smith',
        email: 'john@smith.com',
      };

      jest.spyOn(setup.service, 'findOne').mockResolvedValueOnce(student);

      // Act
      const result = await setup.controller.findOne(studentId);

      // Assert
      expect(result).toEqual(student);
      expect(service.findOne).toHaveBeenCalledWith(studentId);
    });
  });

  describe('update', () => {
    it('should update a student', async () => {
      // Arrange
      const studentId = '1';

      const updateStudentViewModel: UpdateStudentViewModel = {
        firstName: 'UpdatedFirstName',
        lastName: 'UpdatedLastName',
        email: 'updated.email@example.com',
      };

      const updatedStudent = {
        id: studentId,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        deleted: false,
        ...updateStudentViewModel,
      };

      jest
        .spyOn(service, 'update')
        .mockResolvedValueOnce(updatedStudent as any);

      // Act
      const result = await controller.update(studentId, updateStudentViewModel);

      // Assert
      expect(result).toEqual(updatedStudent);
      expect(service.update).toHaveBeenCalledWith(
        studentId,
        updateStudentViewModel,
      );
    });
  });

  describe('remove', () => {
    it('should remove a student', async () => {
      // Arrange
      const studentId = '1';
      const student = {
        id: studentId,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        deleted: false,
        firstName: 'John',
        lastName: 'Smith',
        email: 'john@smith.com',
      };

      jest.spyOn(service, 'remove').mockResolvedValueOnce(student);

      // Act
      const result = await controller.remove(studentId);

      // Assert
      expect(result).toEqual(student);
      expect(service.remove).toHaveBeenCalledWith(studentId);
    });
  });
});
