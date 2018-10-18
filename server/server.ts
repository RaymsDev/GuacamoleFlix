import { RestServer } from './server-rest';
import express from "express";

import dotenv from 'dotenv';

const dotenvFilePath = './../.env';
// To read dotenv file
dotenv.config({
  path:dotenvFilePath
});

const PORT =  Number(process.env.SERVER_PORT) || 3000;
const PREFIX = process.env.API_PREFIX || '/';

const server = RestServer.start(express(), PORT, PREFIX);