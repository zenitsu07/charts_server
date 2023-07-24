import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { ParkingModel } from '../model/parking';
import {
  createParking as createParkingController,
  updateParking as UpdateParkingController ,
  deleteParking as DeleteParkingController,
  getParking as GetParkingController,
} from '../controller/parkingController';

const router = express.Router();

type CreateParkingFunction = (req: Request, res: Response, next: NextFunction) => void;
type UpdateParkingFunction = (req: Request, res: Response, next: NextFunction)  => void;
type getParkingFunction = (req: Request, res: Response, next: NextFunction) => void;

type createParkingController = CreateParkingFunction;
type UpdateParkingController =  UpdateParkingFunction | null;
type GetParkingController = getParkingFunction | null;
type DeleteParkingController= boolean;

router.post('/create', createParkingController);
router.get('/parking', GetParkingController);
// router.patch('/update/:id',UpdateParkingController);
router.delete('/delete/:id',DeleteParkingController);

export default router;
