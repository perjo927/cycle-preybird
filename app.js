import Cycle from '@cycle/core';
// import {div, label, input, hr, h1, makeDOMDriver} from '@cycle/dom';
import {makeDOMDriver, div, input, p} from '@cycle/dom';

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

function main(drivers) {
    return {
        DOM: drivers.DOM.select('input').events('click')
            .map(ev => ev.target.checked)
                .startWith(false)
                .map(toggled =>
                    div([
                        input({type: 'checkbox'}), 'Toggle me',
                        p(toggled ? 'ON' : 'off')
                    ])
                )
    }
}

const drivers = {
    DOM: makeDOMDriver('#app')
};

Cycle.run(main, drivers);