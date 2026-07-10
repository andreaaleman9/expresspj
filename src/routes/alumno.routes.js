import{Router} from 'express';
import * as AlumnoController from '../controllers/alumno.controller.js'

const router = Router();


router.get('/', AlumnoController.getAll);
router.get('/:id', AlumnoController.getById);
router.post('/', AlumnoController.create);
router.patch('/:id', AlumnoController.update);
router.delete('/:id', AlumnoController.remove);

export default router;