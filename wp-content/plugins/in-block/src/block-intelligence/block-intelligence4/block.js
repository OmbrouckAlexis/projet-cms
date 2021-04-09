import { PLUGIN_NAME } from '../../constants'


const { wp } = window
const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { PlainText } = wp.blockEditor
const { MediaUpload, InspectorControls, MediaPlaceholder, InnerBlocks } = wp.blockEditor

const BLOCK_NAME = `${PLUGIN_NAME}/intel-3`

registerBlockType(BLOCK_NAME, {
  title: __('Intelligence Block 4'),
  description: __('text avec image'),
  icon: 'nametag',
  category: 'common',
  attributes: {
    name: {
        type: 'string'
      },
    title: {
      type: 'string'
    },
    subtitle: {
      type: 'string'
    },
    imageUrl: {
      type: 'string'
    },
    imageId: {
      type: 'integer'
    }
  },

  edit: props => {
    const { attributes: { name, title, subtitle, imageId, imageUrl }, setAttributes, className } = props
    return (
      <>
        <div className='d-flex'>
          <div className='col-1'>
          <PlainText
              keepplaceholderonfocus='true'
              placeholder={__('Name')}
              className={className}
              value={name}
              onChange={(newname) => {
                setAttributes({ name: newname })
              }}
            />
            <PlainText
              keepplaceholderonfocus='true'
              placeholder={__('Title1')}
              className={className}
              value={title}
              onChange={(newTitle) => {
                setAttributes({ title: newTitle })
              }}
            />
            <PlainText
              keepplaceholderonfocus='true'
              placeholder={__('Subtitle1')}
              className={className}
              value={subtitle}
              onChange={(newSubtitle) => {
                setAttributes({ subtitle: newSubtitle })
              }}
            />
          </div>
          <div className='col-2'>
          <MediaPlaceholder
                onSelect={(media) => setAttributes({ imageUrl: media.url, imageId: media.id })}
                allowedTypes={['image']}
                multiple={false}
                labels={{ title: 'The Image' }}
              />
          </div>
        </div>
      </>
    )
  },

  save: ({ attributes: { name, title, subtitle, imageUrl } }) => (
    <div className="grid-content-intel">
    <div className="grid-content1-part1">
        <p className="title-blue-intel">{name}</p>
        <div className="rectangle-blue-intel"></div>
    </div>
    <div className="grid-content1-part2">
        <div className="combined-shape">
            <p>{subtitle}</p>
            <p className="info-commentaire">{title}</p>
            <img src={imageUrl} alt=""/>
        </div>
    </div>
  </div>
  )
})
