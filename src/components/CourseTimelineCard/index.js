// Write your code here
import {AiFillCloseCircle} from 'react-icons/ai'

import {
  CourseTitleAndDurationContainer,
  CourseTitle,
  DurationContainer,
  Duration,
  CourseDescription,
  CourseTagsList,
  CourseTagItem,
  CourseTag,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <CourseTitleAndDurationContainer>
        <CourseTitle>{courseTitle}</CourseTitle>
        <DurationContainer>
          <AiFillCloseCircle color="#171f46" />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </CourseTitleAndDurationContainer>
      <CourseDescription>{description}</CourseDescription>
      <CourseTagsList>
        {tagsList.map(eachTag => (
          <CourseTag>{eachTag.name}</CourseTag>
        ))}
      </CourseTagsList>
    </>
  )
}

export default CourseTimelineCard
