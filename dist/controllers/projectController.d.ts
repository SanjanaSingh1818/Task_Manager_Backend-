import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
export declare function getProjects(req: AuthRequest, res: Response): Promise<void>;
export declare function createProject(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function getProject(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function deleteProject(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=projectController.d.ts.map