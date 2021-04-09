import { PLUGIN_NAME } from '../../constants'


const { wp } = window
const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { PlainText } = wp.blockEditor
const { MediaUpload, InspectorControls, MediaPlaceholder, InnerBlocks } = wp.blockEditor

const BLOCK_NAME = `${PLUGIN_NAME}/text-image-cms`

registerBlockType(BLOCK_NAME, {
  title: __('Text avec image test'),
  description: __('text avec image'),
  icon: 'nametag',
  category: 'common',
  attributes: {
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
    const { attributes: { title, subtitle, imageId, imageUrl }, setAttributes, className } = props
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

  save: ({ attributes: { title, subtitle, imageUrl } }) => (
<div className="grid-content">
<div className="grid-content1-part1, text-zone-margin-right">
    <h1>{title}</h1>
    <h4>{subtitle}</h4>
</div>
<div className="grid-content1-part2">
{imageUrl &&
          <img src={imageUrl} alt='' />}
</div>
</div>
  )
})
