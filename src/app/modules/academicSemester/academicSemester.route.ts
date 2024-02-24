import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterControllers } from './academicSemester.controller';
import { AcademicSemesterValidations } from './academicSemester.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/create-academic-semester',
  auth(USER_ROLE.admin, USER_ROLE.superAdmin),
  validateRequest(
    AcademicSemesterValidations.createAcdemicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);

router.get('/:semesterId', auth(USER_ROLE.admin,
  USER_ROLE.superAdmin,
  USER_ROLE.faculty,
  USER_ROLE.student),
  AcademicSemesterControllers.getSingleAcademicSemester);

router.patch(
  '/:courseId',
  auth(USER_ROLE.admin, USER_ROLE.superAdmin),
  validateRequest(
    AcademicSemesterValidations.updateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.updateAcademicSemester,
);

router.get(
  '/', auth(USER_ROLE.admin,
    USER_ROLE.superAdmin,
    USER_ROLE.faculty,
    USER_ROLE.student),
  auth('admin'),
  AcademicSemesterControllers.getAllAcademicSemesters,
);

export const AcademicSemesterRoutes = router;
