"use strict";
import axios from 'axios';
import cheerio from 'cheerio';

export class Casino77  {
    
    homepage: string;
    
    constructor() {
        this.homepage = 'http://www.nbr.de/3/de/casino-77.nbr';
        this.pathToUlContainer = 'ul.CssSpeiseplanItems';
    }
    
    async getWochenkartenLink() {
        
        // load homepage data and find link to pdf "Wochenkarte"
        try {
            const response = await axios.get(this.homepage);
            // console.log(response.status);
            // console.log(response.data);
            
            // Parse the HTML 
            let dom = cheerio.load(response.data);
            
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
            const response = await axios.get(this.homepage);
            
            // Parse the HTML 
            let dom = cheerio.load(response.data);
            
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
    
    analyzeTageskartenPdf(pdfLink: string) {
        let tageskarte;
        
        let pattern = /https?:\/\/www\.nbr\.de\/.*Downloads\/Tageskarte.*(\d{4})_(\d{2})_(\d{2})\.pdf/;
        let result = pattern.exec(pdfLink);
        
        console.log(result);
        
        
        return tageskarte;
    }
    
    
}






