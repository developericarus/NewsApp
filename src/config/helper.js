
//
// Based on the news data set the container style.
//
export const containerStyle = (data) => {
  if (data !== undefined && data.length > 0){
    return {}
  }else{
    return {flex: 1, justifyContent: 'center',alignItems: 'center'}
  }
}

//
// Verifies if user reached at the bottom of the screen.
//
export const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 10;
  return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
}