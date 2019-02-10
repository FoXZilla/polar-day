import Timeline from './Timeline'; // 引用上一步中，你自己定义的 Timeline
import 'short-night/styles.css'; // 官方定义的引用 CSS 文件

const events = [{ // 定义事件列表
    date: '2017-5',
    title: 'Axis example 1',
    endDate: '2017-8',
    endText: 'The axis can avoid for each others'
},{
    date: '2017-6',
    title: 'Axis example 2',
    endDate: '2017-9-1',
    endText: 'End point is 2017.9'
},{
    date: '2017-9-1',
    title: 'Start of 2017.9',
},{
    date: '2017-1-2',
    title: 'Near the milestone',
},{
    date: '2016-12-15',
    endDate: '2017-2',
    title: 'Near the milestone',
    description: 'The date of end is 2017.2.'
},{
    date: '2018-8-15',
    title: 'Close together 1',
},{
    date: '2018-8-1',
    title: 'Close together 2',
},{
    date: '2018-7-15',
    title: 'Close together 3',
    description: 'The event description.',
},{
    date: '2018-7-1',
    title: 'Close together 4',
    description: 'The event description.',
},{
    date: '2016-8-1',
    title: 'Close together 5',
    description: 'The event description. The event description. The event description. The event description. The event description.',
},{
    date: '2016-8-15',
    title: 'Close together 6',
    description: 'The event description. The event description. The event description. The event description. The event description.',
},{
    date: '2018-4-2',
    title: 'A event which title is very very very very very very very very very very long',
},{
    date: '2018-3-9',
    title: '39s Day two years!',
},{
    date: '2017-3-9',
    title: '39s Day one years!',
},{
    date: '2016-3-9',
    title: '39s Day!',
    description: 'In japan and chinese, the pronunciation  of 39 is very like "Thank You". ' +
        'So some people call as Giving Day.'
}];

// 实例化

const timeline = new Timeline(Timeline.mount('#app', 'polar-day'));

timeline.drawInfo.events = events; // 赋值事件列表

timeline.apply().then(function () { // 应用 timeline 中的 drawInfo。此方法返回一个 Promise
    timeline.draw(); // 当应用完成后，将 timeline 画出
});
