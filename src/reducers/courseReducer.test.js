import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
    it('should add course when passed CREATE_COURSE_SUCCESS', () => {
        // arrange
        const initialState = [
            {title: 'A'},
            {title: 'B'}
        ];

        const addedCourse = {title: 'C'};
        const action = actions.createCourseSuccess(addedCourse);

        // act
        const newState = courseReducer(initialState, action);

        // assert
        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('A');
        expect(newState[1].title).toEqual('B');
        expect(newState[2].title).toEqual('C');
    });

    it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
        // arrange
        const initialState = [
            {id: 'A', title: 'A'},
            {id: 'B', title: 'B'}
        ];

        const course = {id: 'B', title: 'updated title'};
        const action = actions.updateCoursesSuccess(course);

        // act
        const newState = courseReducer(initialState, action);
        const updatedCourse = newState.find(x => x.id == course.id);
        const untouchedCourse = newState.find(x => x.id == 'A');

        // assert
        expect(updatedCourse.title).toEqual('updated title');
        expect(untouchedCourse.title).toEqual('A');
        expect(newState.length).toEqual(2);
    });
});
