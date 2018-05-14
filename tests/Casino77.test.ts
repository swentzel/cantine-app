import { Casino77 } from '../src/services/Casino77';


describe('src/services/Casino77', () => {
  
  it('Casino77.getWochenkartenLink', async () => {
    
    // run tests
    let casino77 = new Casino77();
    let wochenkartenLink = await casino77.getWochenkartenLink();
    
    console.log(wochenkartenLink);
    
    let pattern = /https?:\/\/www\.nbr\.de\/.*Downloads\/KW.*\.pdf/g;
        
    expect(true).toEqual(pattern.test(wochenkartenLink));
         
  });
  
  it('Casino77.getTageskartenLink', async () => {
    
    // run tests
    let casino77 = new Casino77();
    let tageskartenLink = await casino77.getTageskartenLink();
    
    console.log(tageskartenLink);
    
    let pattern = /https?:\/\/www\.nbr\.de\/.*Downloads\/Tageskarte.*\.pdf/g;
        
    expect(true).toEqual(pattern.test(tageskartenLink));
         
  });
  
  it('Casino77.analyzeTageskartenPdf', async () => {
    
    // expect.assertions(1);
    // run tests
    let casino77 = new Casino77();
    let tageskartenLink = await casino77.getTageskartenLink();
    
    let tageskarte = casino77.analyzeTageskartenPdf(tageskartenLink);
        
    expect(true).toEqual(true);
         
  });
  
});
