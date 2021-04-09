import { PLUGIN_NAME } from '../../constants'


const { wp } = window
const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { PlainText } = wp.blockEditor
const { MediaPlaceholder} = wp.blockEditor
const { URLInputButton } = wp.blockEditor

const BLOCK_NAME = `${PLUGIN_NAME}/block-footer`

registerBlockType(BLOCK_NAME, {
  title: __('Block footer'),
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
    },
    link: {
      type: 'string'
    }, 
  },

  edit: props => {
    const { attributes: { title, subtitle, imageId, imageUrl, link}, setAttributes, className } = props
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
            <URLInputButton
          className={__('link')}
          url={link}
          onChange={link => setAttributes({ link })}
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

  save: ({ attributes: { title, subtitle, imageUrl, link } }) => (
    <div class="div-footer-block">
      <div className="grid-content">
      <div className="grid-content4-part1">
        <img src={imageUrl} alt='' />
      </div>
        <div className="grid-content4-part2">
          <h2>{title}</h2>
          <p>{subtitle}</p><br />
          <a href="/" className="link-content">{link}</a>
        </div>
      </div>
    </div>
  )
})
