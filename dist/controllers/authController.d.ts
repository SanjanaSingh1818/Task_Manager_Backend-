import { Request, Response } from 'express';
import { AuthRequest } from '../middleware/auth.js';
export declare function signup(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function login(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function getMe(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=authController.d.ts.map