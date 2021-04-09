import { PLUGIN_NAME } from '../../constants'


const { wp } = window
const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { PlainText } = wp.blockEditor

const BLOCK_NAME = `${PLUGIN_NAME}/textarticle`

registerBlockType(BLOCK_NAME, {
  title: __('Titre avec text article'),
  description: __('text avec image'),
  icon: 'nametag',
  category: 'common',
  attributes: {
    title: {
      type: 'string'
    },
    subtitle: {
      type: 'string'
    }
  },

  edit: props => {
    const { attributes: { title, subtitle }, setAttributes, className } = props
    return (
      <>
        <div className='d-flex'>
          <div className='col-1'>
            <PlainText
              keepplaceholderonfocus='true'
              placeholder={__('Title')}
              className={className}
              value={title}
              onChange={(newTitle) => {
                setAttributes({ title: newTitle })
              }}
            />
            <PlainText
              keepplaceholderonfocus='true'
              placeholder={__('Subtitle')}
              className={className}
              value={subtitle}
              onChange={(newSubtitle) => {
                setAttributes({ subtitle: newSubtitle })
              }}
            />
          </div>
        </div>
      </>
    )
  },

  save: ({ attributes: { title, subtitle } }) => (
<div>
    <h4 className="title-detail-article">{title}</h4>
  <p className="text-detail-article">{subtitle}</p>
   </div>
  )
})
