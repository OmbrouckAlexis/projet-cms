import { PLUGIN_NAME } from '../../constants'

const { wp } = window
const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { PlainText } = wp.blockEditor

const BLOCK_NAME = `${PLUGIN_NAME}/title-blue-text`

registerBlockType(BLOCK_NAME, {
  title: __('Titre bleu texte'),
  description: __('Plain text block!'),
  icon: 'nametag',
  category: 'common',
  attributes: {
    title: {
      type: 'string'
    },
    subtitle: {
    type: 'string'
      },
    text1: {
    type: 'string'
      },
      text2: {
        type: 'string'
          }
  },

  edit: props => {
    const { attributes: { title, subtitle, text1, text2 }, setAttributes, className } = props
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
          </div>
          <div className='col-2'>
          <PlainText
              keepplaceholderonfocus='true'
              placeholder={__('Subtitle')}
              className={className}
              value={subtitle}
              onChange={(newSubtitle) => {
                setAttributes({ subtitle: newSubtitle })
              }}
            /><PlainText
            keepplaceholderonfocus='true'
            placeholder={__('texte 1')}
            className={className}
            value={text1}
            onChange={(newText1) => {
              setAttributes({ text1: newText1 })
            }}
          /><PlainText
          keepplaceholderonfocus='true'
          placeholder={__('texte 2')}
          className={className}
          value={text2}
          onChange={(newText2) => {
            setAttributes({ text2: newText2 })
          }}
        />
          </div>
        </div>
      </>
    )
  },

  save: ({ attributes: { title, subtitle, text1, text2 } }) => {
      return (

          <div className="grid-content">
              <div className="grid-content2-part1">
                  <p className="title-blue">{title}</p>
                  <div className="rectangle-blue"></div>
              </div>
              <div className="grid-content2-part2, text-zone-margin-right">
                  <h3>{subtitle}</h3>
                  <p>{text1}</p>
                  <p>{text2}</p>
              </div>
          </div>
      )
  }
})
