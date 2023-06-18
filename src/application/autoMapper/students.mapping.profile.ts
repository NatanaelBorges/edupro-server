import { StudentsViewModel } from '@application/view-models/students/student.view-model';
import { StudentsMap } from '@infrastructure/data/mappings/students.map';

export class StudentMappingProfile {
  public static toEntityViewModel(
    entityStudent: StudentsMap,
  ): StudentsViewModel {
    const viewModelStudent: StudentsViewModel = new StudentsViewModel();

    viewModelStudent.id = entityStudent.id;
    viewModelStudent.firstName = entityStudent.firstName;
    viewModelStudent.lastName = entityStudent.lastName;
    viewModelStudent.email = entityStudent.email;
    viewModelStudent.active = entityStudent.active;
    viewModelStudent.createdAt = entityStudent.createdAt;

    return viewModelStudent;
  }

  public static toEntityViewModels(
    entityStudents: StudentsMap[],
  ): StudentsViewModel[] {
    return entityStudents.map((entityStudent) =>
      this.toEntityViewModel(entityStudent),
    );
  }
}
