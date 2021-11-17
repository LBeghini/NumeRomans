import { NextFunction, Request, Response, Router } from 'express';
import ArabicConvert from '../scripts/ArabicConverter';

const RomanConvertController: Router = Router();

export default RomanConvertController;

RomanConvertController.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const arabic: string = req.query.character as string;
    res.status(200).send({ number: ArabicConvert(parseInt(arabic, 10)) });
  } catch (e) {
    next(e);
  }
});
