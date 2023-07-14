import User from "../models/User";
import { Request, Response } from "express";

export const getUser = async(req: Request, res: Response): Promise<void> => {
    try{
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch(error: any){
        res.status(404).json({ message: error.message });
    }
}