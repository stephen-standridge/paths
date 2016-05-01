import ThreadedTree from './ThreadedTree';
import Color from '../shared/color';
import Warp from './Warp';

class Loom {
  constructor( state = {} ){
    this.state = this.makeState( defaults, state )
  }
  updateState( state, newState ){
    state = state.mergeDeep( newState )
    return state
  }
  makeState( state, newState ){
    state = state.mergeDeep( newState )    
    state = state.set('structure', this.makeStructure( state ) )
    this.makeColor( state )
    return state    
  }
  makeStructure( state ){
    this.structure = new ThreadedTree( state.get('structure') )
    return this.structure.state
  }  
  makeColor( state ){
    this.color = new Color( state.get('color') );
    return
  }
  weave(){
    //handles the iterative traversal, goes to nodes on a timer
    //go to node
    this.makeCell( cell )
  }
  determineOffset( i ){
    //given index I
    //returns a unique number 
    //that is the nearest multiple of _min
    //that is positive for odd numbers
    //negative for even numbers

    let modification = -1.0 + ( (1.0 + I%2) * (I%2) )
    return modification * ( this._min * Math.ceil(I/this._min) )
  }  
	gridSize(){
		return this.length * this._min
	}	
  makeCell( cell ) {
    //check 
  }	
}

export default Loom
