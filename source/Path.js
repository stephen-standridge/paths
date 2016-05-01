import {fromJS} from 'immutable';
import {DEG_TO_RAD} from '../constants/linework.js';

class Path{
	constructor(){
		this.state = this.initialState
	}
	get initialState(){
		return fromJS({ instructions: [] })
	}
	horizontalTo( p ){
		if(!p){ return }
		this.state = this.dispatch( this.state, { type:'ADD', prefix: 'h', point: p })
		return this.state;
	}
	verticalTo( p ){
		if(!p){ return }
		this.state = this.dispatch( this.state, { type:'ADD', prefix: 'v', point: p })
		return this.state;
	}	
	lineTo( p ){
		if(!p){ return }
		this.state = this.dispatch( this.state, { type:'ADD', prefix: 'l', point: p })
		return this.state;
	}	
	moveTo( p ){
		if(!p){ return }
		this.state =this.dispatch( this.state, { type:'ADD', prefix: 'M', point: p })
		return this.state;
	}
	angleTo( deg, p ){
		let x, y, rad = this.toRad(deg);
		x = Number( ( p * Math.cos( rad ) ).toFixed(3) )
		y = Number( ( p * Math.sin( rad ) ).toFixed(3) )
		this.state = this.dispatch( this.state, { type:'ADD', prefix: 'l', point: [x, y] })
		return this.state 
	}	
	toRad( deg ){
		return deg * DEG_TO_RAD
	}
	close(){
		this.state = this.dispatch( this.state, { type:'ADD', prefix: 'z' })
		return this.state
	}
	back( ){
		this.state = this.dispatch( this.state, { type:'REMOVE' })
		return this.state
	}
	print(){
		return `${ this.state.get('instructions')
						    .reduce(function(a, b){ 
						    	return `${a}${b[0] + [].concat(b[1]).join(',')}`
						    }, '')
						  }`	
	}
	dispatch( state, action ){
		switch( action.type ){
			case 'ADD':
				state = state.update('instructions', ( i )=>  i.push([action.prefix, action.point || '' ]));
				break;
			case 'REMOVE':
				state = state.update( 'instructions', ( i )=> i.pop() );
				break;
		}
		return state;
	}	
}

export default Path;