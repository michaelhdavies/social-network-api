import { Schema, model, Document } from 'mongoose';
import reactionSchema from './Reaction';

interface IThought extends Document {
    thoughtText: string;
    createdAt: Schema.Types.Date;
    username: string;
    reactions: [typeof reactionSchema];
}