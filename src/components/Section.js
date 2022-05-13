import '../styles/section.scss';
import ButtonGroup from './ButtonGroup';
import DownArrow from './DownArrow';
import ItemText from './ItemText';

function Section({title, description, backgroundImage, leftButtonText, rightButtonText}) {
  const buttons = {
        left: leftButtonText ? leftButtonText : 'no data',
        right: rightButtonText ? rightButtonText : 'no data'
    }

  return (
    <div className='wrap' style={{backgroundImage: `url(/images/${backgroundImage})`}}>
      <ItemText title={title} description={description} />
      <div className='centeredControls'>
        <ButtonGroup buttons = {buttons} className='buttonGroup' />
        <DownArrow src='/images/down-arrow.svg' />
      </div>
    </div>
  )
}

export default Section;