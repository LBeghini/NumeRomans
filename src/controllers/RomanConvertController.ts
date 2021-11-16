import { NextFunction, Request, Response, Router } from 'express';
import RomanConvert from '../scripts/RomanConverter';

const RomanConvertController: Router = Router();

export default RomanConvertController;

RomanConvertController.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const roman: string = req.query.character as string;
    res.status(200).send({ number: RomanConvert(roman) });
  } catch (e) {
    next(e);
  }
});
