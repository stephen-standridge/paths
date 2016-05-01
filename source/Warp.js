import {Map, List} from 'immutable';

class Warp {
  constructor(){
    this.state = this.initialState();
  }
  initialState(){
    return Map({
      'threads': List(), 
      'dimensions': Map({start:0, width: 0}),
      'meta' : Map({ offset: 0, grid: 0, count: 0 })
    })
  }
  chooseThreadStarts(){
    //choose a point between min and max of node
    //that considers a global offset 
    //and conforms with the grid size such that
    //threads will not overlap
  }
  drawThreads(){
    this.chooseThreadStarts()
    this.state = this.dispatch({type: 'ADD_THREAD', thread: thread})
    //generates drawing command set for each starting point
  }
  reset(){
    this.state = this.dispatch({type: 'CLEAR_THREADS'})    
  }
  dispatch( action ){
    let mut;
    switch( action.type ){
      case 'SET_DIMENSIONS':
        mut = this.state;

        return mut
      case 'SET_META':
        mut = this.state;

        return mut      
      case 'ADD_THREAD':
        mut = this.state;  

        return mut
      case 'CLEAR_THREADS':
        mut = this.state;   
          
        return mut        
    }
  }
}



export default Warp