import Cycle from '@cycle/core';
// import {div, label, input, hr, h1, makeDOMDriver} from '@cycle/dom';
import CycleDOM from '@cycle/dom';

//
// function main(sources) {
//     const sinks = {
//         DOM: sources.DOM.select('.field').events('input')
//             .map(ev => ev.target.value)
//             .startWith('')
//             .map(name =>
//                 div([
//                     label('Name:'),
//                     input('.field', {attributes: {type: 'text'}}),
//                     hr(),
//                     h1('Hello ' + name)
//                 ])
//             )
//     };
//     return sinks;
// }
//
// Cycle.run(main, { DOM: makeDOMDriver('#app-container') });

function main() {
    return {
        DOM: Rx.Observable.interval(1000)
            .map(i => CycleDOM.h1('' + i + ' seconds elapsed'))
    };
}

const drivers = {
    DOM: CycleDOM.makeDOMDriver('#app')
};

Cycle.run(main, drivers);