import express from "express";
import { RestServer } from './server-rest';

import dotenv from 'dotenv';

const dotenvFilePath = './../.env';
// To read dotenv file
dotenv.config({
  path: dotenvFilePath
});

const DEFAULT_PORT = 3000;
const PORT = Number(process.env.SERVER_PORT) || DEFAULT_PORT;
const PREFIX = process.env.API_PREFIX || '/api';

const server = RestServer.start(express(), PORT, PREFIX);
