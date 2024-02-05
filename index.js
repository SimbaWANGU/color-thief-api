"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getColorFromURL, getPaletteFromURL } = require('@delirius/color-thief-node');
require('dotenv').config();
const app = express();
const port = 3000;
// *Middleware
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// *Routes
app.post('/color', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = req.body.url;
    if (!url) {
        res.status(400).json({
            error: 'URL is required'
        });
    }
    const color = yield getColorFromURL(url);
    res.json({
        color
    });
}));
app.post('/palette', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = req.body.url;
    if (!url) {
        res.status(400).json({
            error: 'URL is required'
        });
    }
    const palette = yield getPaletteFromURL(url);
    res.json({
        palette
    });
}));
app.listen(port, () => {
    console.log(`Express server listening at http://localhost:${port}`);
});
