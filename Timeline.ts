import * as Engine from 'short-night';
import Axis from './Axis';
import Event from './Event';

export default class Timeline extends Engine.Timeline {
    theme = 'colors';

    axisConstructor = Axis;
    eventConstructor = Event;
}
