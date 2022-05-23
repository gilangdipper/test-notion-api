import Image from 'next/image'
import styled from 'styled-components'

const FormWrapper = styled.div`
  background: #fffefc;
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    width: 500px;
    background: #fff;
    border: 1px solid #e4e3e2;
    border-radius: 4px;
    display: flex;
    flex-flow: row wrap;

    .header {
      width: 100%;
      display: flex;
      padding: 16px 16px 16px;
      align-items: center;
      border-bottom: 1px solid #e4e3e2;

      .title {
        flex: 1 1 auto;
        margin-left: 10px;
        font-weight: 500;
        font-size: 16px;
      }
    }

    .content {
      display: flex;
      padding: 16px 32px;
      flex-flow: row wrap;

      .title {
        flex: 0 0 100%;
        font-size: 12px;
        text-align: center;
        padding: 0 32px;
        margin-bottom: 32px;

        span {
          font-weight: 600;
          font-size: 16px;
          line-height: 18px;
        }
      }

      .description {
        flex: 0 0 100%;
        text-align: center;
        font-size: 12px;

        a {
          color: #2c19ff;
        }
      }

      form {
        flex: 0 0 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        padding: 16px 32px;

        input[type='text'] {
          flex: 0 0 100%;
          background: #f8f7f7;
          border: 1px solid #e4e3e2;
          border-radius: 4px;
          font-size: 16px;
          padding: 16px;
          margin-bottom: 12px;
        }

        button {
          background: #53a9d7;
          border: 0;
          color: #fff;
          font-size: 16px;
          padding: 8px 16px;
          cursor: pointer;
          border-radius: 4px;
        }
      }
    }
  }
`

const IntegrationForm = () => {
  return (
    <FormWrapper>
      <div className="box">
        <div className="header">
          <Image width={28} height={28} src="/transnotion.png" />
          <div className="title">TransNotion</div>
        </div>
        <div className="content">
          <div className="title">
            <span>We use DeepL Translator at TransNotion!</span>
            <br />
            DeepL is the world&#39;s best machine translation. You will need to
            have a DeepL account in order to get its Authentication Key:
          </div>
          <div className="description">
            Log into your{' '}
            <a
              href="https://www.deepl.com/pro-account/summary"
              target="_blank"
              rel="noreferrer"
            >
              DeepL account
            </a>
            <br />
            and paste in the DeepL Authentication Key:
          </div>
          <form>
            <input type="text" />
            <button type="button">Confirm</button>
          </form>
        </div>
      </div>
    </FormWrapper>
  )
}

export default IntegrationForm
