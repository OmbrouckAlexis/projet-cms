import { PLUGIN_NAME } from '../../constants'


const { wp } = window
const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { PlainText } = wp.blockEditor
const { MediaUpload, InspectorControls, MediaPlaceholder, InnerBlocks } = wp.blockEditor
const { URLInputButton } = wp.blockEditor

const BLOCK_NAME = `${PLUGIN_NAME}/intel-2`

registerBlockType(BLOCK_NAME, {
  title: __('Intelligence Block 3'),
  description: __('text avec image'),
  icon: 'nametag',
  category: 'common',
  attributes: {
    name: {
        type: 'string'
      },
    title1: {
      type: 'string'
    },
    subtitle1: {
      type: 'string'
    },
    title2: {
        type: 'string'
      },
      subtitle2: {
        type: 'string'
      },
      title3: {
        type: 'string'
      },
      subtitle3: {
        type: 'string'
      },
      title4: {
        type: 'string'
      },
      subtitle4: {
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
    const { attributes: { name, title1, subtitle1,title2, subtitle2,title3, subtitle3,title4, subtitle4, imageId, imageUrl, link }, setAttributes, className } = props
    return (
      <>
        <div className='d-flex'>
          <div className='col-2'>
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
              value={title1}
              onChange={(newTitle1) => {
                setAttributes({ title1: newTitle1 })
              }}
            />
            <PlainText
              keepplaceholderonfocus='true'
              placeholder={__('Subtitle1')}
              className={className}
              value={subtitle1}
              onChange={(newSubtitle1) => {
                setAttributes({ subtitle1: newSubtitle1 })
              }}
            />
            <PlainText
              keepplaceholderonfocus='true'
              placeholder={__('Title2')}
              className={className}
              value={title2}
              onChange={(newTitle2) => {
                setAttributes({ title2: newTitle2 })
              }}
            />
            <PlainText
              keepplaceholderonfocus='true'
              placeholder={__('Subtitle2')}
              className={className}
              value={subtitle2}
              onChange={(newSubtitle2) => {
                setAttributes({ subtitle2: newSubtitle2 })
              }}
            />
            <PlainText
              keepplaceholderonfocus='true'
              placeholder={__('Title3')}
              className={className}
              value={title3}
              onChange={(newTitle3) => {
                setAttributes({ title3: newTitle3 })
              }}
            />
            <PlainText
              keepplaceholderonfocus='true'
              placeholder={__('Subtitle3')}
              className={className}
              value={subtitle3}
              onChange={(newSubtitle3) => {
                setAttributes({ subtitle3: newSubtitle3 })
              }}
            />
            <PlainText
              keepplaceholderonfocus='true'
              placeholder={__('Title4')}
              className={className}
              value={title4}
              onChange={(newTitle4) => {
                setAttributes({ title4: newTitle4 })
              }}
            />
            <PlainText
              keepplaceholderonfocus='true'
              placeholder={__('Subtitle4')}
              className={className}
              value={subtitle4}
              onChange={(newSubtitle4) => {
                setAttributes({ subtitle4: newSubtitle4 })
              }}
            />
            <URLInputButton
          className={__('link')}
          url={link}
          onChange={link => setAttributes({ link })}
        />
          </div>
          <div className='col-1'>
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

  save: ({ attributes: { name, title1, subtitle1, title2, subtitle2, title3, subtitle3, title4, subtitle4, imageUrl, link } }) => (
<div class="grid-leadership">
    <div className="grid-leadership2">
        <img className="img-leadership" src={imageUrl} alt=""/>
    </div>
    <div className="grid-leadership1">
        <h4 className="title-leadership">{name}</h4>
        <p className="leadership-blue">{title1}</p>
        <p className="leadership-text">{subtitle1}</p>
        <p className="leadership-blue">{title2}</p>
        <p className="leadership-text">{subtitle2}</p>
        <p className="leadership-blue">{title3}</p>
        <p className="leadership-text">{subtitle3}</p>
        <p className="leadership-blue">{title4}</p>
        <p className="leadership-text">{subtitle4}</p>
        <a className="link-content">{link}</a>
    </div>
</div>
  )
})
