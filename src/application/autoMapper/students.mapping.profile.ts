import { StudentsViewModel } from '@application/view-models/students/student.view-model';
import { Student } from '@infrastructure/data/mappings/students.map';

export class StudentMappingProfile {
  public static toEntityViewModel(entityStudent: Student): StudentsViewModel {
    const viewModelStudent: StudentsViewModel = new StudentsViewModel();

    viewModelStudent.id = entityStudent.id;
    viewModelStudent.firstName = entityStudent.firstName;
    viewModelStudent.lastName = entityStudent.lastName;
    viewModelStudent.email = entityStudent.email;
    viewModelStudent.active = entityStudent.active;
    viewModelStudent.createAt = entityStudent.createAt;

    return viewModelStudent;
  }

  public static toEntityViewModels(
    entityStudents: Student[],
  ): StudentsViewModel[] {
    return entityStudents.map((entityStudent) =>
      this.toEntityViewModel(entityStudent),
    );
  }
}
