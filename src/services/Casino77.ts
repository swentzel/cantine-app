"use strict";
import Axios from 'axios';
import Cheerio from 'cheerio';
import Fs from 'fs';
import Path from 'path';
import PDFParser from "pdf2json";
const util = require('util');


export class Casino77  {
    
    homepage: string;
    
    constructor() {
        this.homepage = 'http://www.nbr.de/3/de/casino-77.nbr';
        this.pathToUlContainer = 'ul.CssSpeiseplanItems';
    }
    
    async getWochenkartenLink() {
        
        // load homepage data and find link to pdf "Wochenkarte"
        try {
            const response = await Axios.get(this.homepage);
            // console.log(response.status);
            // console.log(response.data);
            
            // Parse the HTML 
            let dom = Cheerio.load(response.data);
            
            // find links to menu (pdf)
            let pdfLink = undefined;
            
            dom(this.pathToUlContainer).children('li').each(function(i, elem) {
              const liItemText = dom(this).text().trim();
              
              // skip link if linktext ~ "Liste Zusatzstoffe/Allergene"
              const reZusatzstoffe = /Liste Zusatzstoffe/g;
              if(reZusatzstoffe.test(liItemText)) {
                  return;
              } 
              
              // skip link if linktext ~ "Tages-Zusatzkarte"
              const reZusatzkarte = /Tages-Zusatzkarte/g;
              if(reZusatzkarte.test(liItemText)) {
                  return;
              }
              
              // console.log(liItemText);
              // console.log('kein Zusatzstoff oder Tages-Zusatzkarte');
              
              // find link to pdf
              pdfLink = dom(elem).children('div').children('a').attr('href');
              // console.log(pdfLink);
            });
            
            return `${this.homepage}${pdfLink}`;
            
        } catch (error) {
            console.error(error);
            return undefined;
        }
        
    }
    
    
    async getTageskartenLink() {
        
        // load homepage data and find link to pdf "Tages-Zusatzkarte"
        try {
            const response = await Axios.get(this.homepage);
            
            // Parse the HTML 
            let dom = Cheerio.load(response.data);
            
            // find links to menu (pdf)
            let pdfLink = undefined;
            
            dom(this.pathToUlContainer).children('li').each(function(i, elem) {
              const liItemText = dom(this).text().trim();
              
              // skip link if linktext ~ "Liste Zusatzstoffe/Allergene"
              const reZusatzstoffe = /Liste Zusatzstoffe/g;
              if(reZusatzstoffe.test(liItemText)) {
                  return;
              } 
              
              // skip link if linktext ~ "Wochenkarte"
              const reZusatzkarte = /Wochenkarte/g;
              if(reZusatzkarte.test(liItemText)) {
                  return;
              }
              
              
              // find link to pdf
              pdfLink = dom(elem).children('div').children('a').attr('href');
            });
            
            return `${this.homepage}${pdfLink}`;
            
        } catch (error) {
            console.error(error);
            return undefined;
        }
        
    }
    
    async analyzeTageskartenPdf(pdfLink: string) {
        let tageskarte;
        
        let pattern = /https?:\/\/www\.nbr\.de\/.*Downloads\/Tageskarte.*(\d{4})_(\d{2})_(\d{2})\.pdf/;
        let result = pattern.exec(pdfLink);
        
        // console.log(result);
        
        let pdfParser = new PDFParser();
        
        let pathToPdf = await this.downloadPdf(pdfLink);
        
        console.log(pathToPdf);
        
        // console.log(Fs.statSync(pathToPdf));
        
        pdfParser.loadPDF(pathToPdf);
        
        return new Promise(function(resolve, reject) {
            pdfParser.on("pdfParser_dataReady", pdfData => {
                console.log(JSON.stringify(pdfData));
                resolve();
            });
            pdfParser.on("pdfParser_dataError", errData => {
                console.error(errData.parserError);
                reject();
            });
        });
        
        
    }
    
    
    async downloadPdf(pdfLink: string) {
        const url = 'http://www.nbr.de/Downloads/Tageskarte%20Neu_xls%2014_05_18.pdf';
        const dirPath = Path.resolve(__dirname, '../../downloads');
        const path = Path.resolve(dirPath, 'tageskarte.pdf');
        
        // create directory if it doesn't exist
        if (!Fs.existsSync(dirPath)) {
            Fs.mkdirSync(dirPath);
        }
        
        let downloadResult = await Axios({
          method:'get',
          url:pdfLink,
          responseType:'stream'
        });
        // console.log(downloadResult);
        
        let writeStream = Fs.createWriteStream(path);
        downloadResult.data.pipe(writeStream);
        // console.log(writeStream);
        
        
        return new Promise(function(resolve, reject) {
           downloadResult.data.on('end', () => {
              resolve(path);
            });
            downloadResult.data.on('error', () => {
              reject()
            });
        });
        
    }
    
    
}






