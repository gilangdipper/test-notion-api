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
      justify-content: space-between;
      padding: 14px 20px;
      align-items: center;
      border-bottom: 1px solid #e4e3e2;

      .left-header {
        display: flex;

        .title {
          flex: 1 1 auto;
          margin-left: 10px;
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
          display: flex;
          align-items: center;
        }
      }

      .right-header {
        p {
          margin: 0;
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;
        }
      }
    }

    .content {
      display: flex;
      padding: 16px 32px;
      flex-flow: row wrap;

      .title {
        flex: 0 0 100%;
        padding: 0 32px;
        margin-bottom: 32px;
        display: flex;
        flex-flow: row wrap;
        text-align: center;

        .main {
          flex: 0 0 100%;
          font-weight: 600;
          font-size: 20px;
          line-height: 24px;
          margin-bottom: 16px;
        }

        .subtitle {
          font-size: 12px;
          font-size: 12px;
          line-height: 15px;
        }
      }

      .description {
        flex: 0 0 100%;
        text-align: center;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;

        p {
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;

          > span {
            margin: 0 4px 0 8px !important;

            &:last-child {
              margin-left: 2px !important;
            }
          }

          a {
            text-decoration: underline;
          }
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
          background: #fbfbfb;
          border: 1px solid #dfdfde;
          border-radius: 2px;
          font-size: 14px;
          padding: 14px 16px;
          margin-bottom: 16px;

          &::placeholder {
            color: #9d9d9d;
          }
        }

        button {
          background: #53a9d7;
          border: 0;
          color: #fff;
          font-size: 16px;
          padding: 8px 64px;
          cursor: pointer;
          border-radius: 4px;
        }

        p {
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          text-decoration: underline;
          color: #e0615b;
          margin: 16px 0 0;
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
          <div className="left-header">
            <Image width={30} height={30} src="/transnotion-logo.png" />
            <div className="title">Transnotion</div>
          </div>
          <div className="right-header">
            <p>Input Authentication Key</p>
          </div>
        </div>
        <div className="content">
          <div className="title">
            <div className="main">
              We’re using DeepL Translator
              <br />
              to support Transnotion.
            </div>
            <div className="subtitle">
              DeepL is the world’s best machine translation. You will need to
              <br />
              have a DeepL account in order to get its <b>Authentication Key</b>
              :
            </div>
          </div>
          <div className="description">
            <p>
              Log into your
              <Image width={16} height={20} src="/deepl-logo.png" />
              <a
                href="https://www.deepl.com/pro-account/summary"
                target="_blank"
                rel="noreferrer"
              >
                DeepL Account
              </a>
              <Image width={6} height={6} src="/link-logo.png" />
            </p>
            <p>and paste in the DeepL Authentication Key:</p>
          </div>
          <form>
            <input type="text" placeholder="Input authentication key here" />
            <button type="button">Confirm key</button>
            <p>
              <a
                href="https://www.deepl.com/translator"
                target="_blank"
                rel="noreferrer"
              >
                Don’t have a DeepL account?
              </a>
            </p>
          </form>
        </div>
      </div>
    </FormWrapper>
  )
}

export default IntegrationForm
