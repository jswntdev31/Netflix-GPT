

import { InferenceClient } from "@huggingface/inference";
import { OPENAI_KEY } from './constants';

const client = new InferenceClient( OPENAI_KEY);


export default client;