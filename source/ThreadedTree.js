import Tree from 'basic-tree';
import Path from './Path.js';
import InitialLinework from '../constants/linework.js';
import {Observable} from 'rx';
import {Map} from 'immutable';

class ThreadedTree extends Tree{
	constructor(args){
		super(args);
		this._queue = [];
		this._source = Observable.from( this._queue ).publish();
	}
	makeNode( value, n=this._node, l=this._level ){
		let val = value == undefined? false : value,
				level = l,
				node = n,
				subscription = this._source.subscribe( this.onNext.bind(this, node, level) ),
				offset = this.determineOffset( node, level )
				//value == array of three paths
		return Map({
			subscription: subscription,
			value: value,
			__n: node,
			__l: level
		})		
	}
	onNext( node, level, item ){
		this.goTo( node, level )
		switch(item.type){
			case 'SET':
				this.node = item.value
				break;
			case 'MERGE':
				this.node = {}.assign( this.node, item.value )
				break;
		}
	}
}

export default ThreadedTree;