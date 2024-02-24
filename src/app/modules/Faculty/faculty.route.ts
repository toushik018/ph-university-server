import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { USER_ROLE } from '../user/user.constant';
import { FacultyControllers } from './faculty.controller';
import { updateFacultyValidationSchema } from './faculty.validation';

const router = express.Router();

router.get('/:id', auth(USER_ROLE.admin, USER_ROLE.superAdmin, USER_ROLE.faculty), FacultyControllers.getSingleFaculty);

router.patch(
  '/:id', auth(USER_ROLE.admin, USER_ROLE.superAdmin),
  validateRequest(updateFacultyValidationSchema),
  FacultyControllers.updateFaculty,
);

router.delete('/:id', auth(USER_ROLE.admin, USER_ROLE.superAdmin), FacultyControllers.deleteFaculty);

router.get(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.faculty, USER_ROLE.superAdmin),
  FacultyControllers.getAllFaculties,
);

export const FacultyRoutes = router;
