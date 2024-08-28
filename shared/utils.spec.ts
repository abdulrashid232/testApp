import { pluck, range } from "./utils";
describe('utils', ()=>{
  describe('range',() =>{
    it("return correct range from 1 to 5",()=>{
      expect(range(1,5)).toEqual([1,2,3,4]);
    });
    it("return correct range from 21 to 24",()=>{
      expect(range(21,24)).toEqual([21,22,23]);
    });
  });
  describe('pluck',() =>{
    it('returns correct results', ()=>{
      const data = [
        {id: '1', name: 'food'},
        {id: '2', name: 'code'},
        {id: '3', name: 'ball'},
      ]
      expect(pluck(data,'name')).toEqual(['food','code','ball']);
    });
  });
})