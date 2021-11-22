import { Request, Response } from 'express';

import { TurnUserAdminUseCase } from './TurnUserAdminUseCase';

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { user_id } = request.params;

      const turnUserInAdmin = this.turnUserAdminUseCase.execute({ user_id });

      response.json(turnUserInAdmin);
    } catch (error) {
      return response
        .status(404)
        .json({ error: `Couldn't set admin: ${error}` });
    }
  }
}

export { TurnUserAdminController };
