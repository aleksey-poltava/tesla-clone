import '../styles/section.scss';
import ButtonGroup from './ButtonGroup';
import DownArrow from './DownArrow';
import ItemText from './ItemText';

function Section({id, title, description, backgroundImage, leftButtonText, rightButtonText, slides}) {
  const buttons = {
        left: leftButtonText ? leftButtonText : 'no data',
        right: rightButtonText ? rightButtonText : null
    }

  let style = {};
  if (id >= (slides - 1)) {
    style = {display: 'none'};
  }

  return (
    <div key={id} className={`wrap nav-${id}`} style={{backgroundImage: `url(/images/${backgroundImage})`}}>
      <ItemText title={title} description={description} />
      <div className='centeredControls'>
        <ButtonGroup buttons = {buttons} className='buttonGroup' />
        <DownArrow src='/images/down-arrow.svg' next={id} slides={slides} stl={style} />
      </div>
    </div>
  )
}

export default Section;