import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
export declare function getTasks(req: AuthRequest, res: Response): Promise<void>;
export declare function createTask(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function updateTask(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function deleteTask(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=taskController.d.ts.map