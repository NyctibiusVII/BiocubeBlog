import type { ContactFormData } from '@/types'
import { rootUrl } from '@/biocube-data'
import {
    Body,
    Container,
    Column,
    Head,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
} from '@react-email/components'

const ENVIRONMENT = process.env.ENVIRONMENT || 'product'
const baseURL = ENVIRONMENT === 'product' ? rootUrl : 'http://localhost:3000'

export const EmailTemplate = (data: ContactFormData) => {
    const { firstName, lastName, email, phone, message, date } = data

    return (
        <Html>
            <Head />
            <Preview>Mensagem de {firstName}, através do site Biocube</Preview>

            <Body style={main}>
                <Container style={container}>
                    <Section style={logo}>
                        <Img width={96} src={`${baseURL}/favicon-96x96.png`} />
                    </Section>

                    <Section style={sectionsBorders}>
                        <Row>
                            <Column style={sectionBorder} />
                            <Column style={sectionCenter} />
                            <Column style={sectionBorder} />
                        </Row>
                    </Section>

                    <Section style={content}>
                        <Text style={heading}>
                            Mensagem de <span style={{ color: '#01F26D' }}>{firstName} {lastName}</span>
                        </Text>

                        <Text style={paragraph}>{message}</Text>

                        <Text style={paragraph}>
                            Informações de Contato
                            <br />

                            Email:{' '}
                            <Link href={`mailto:matheus.dev.07@gmail.com?subject=Retorno%20Biocube&body=Ol%C3%A1%20${firstName}%20${lastName}%21%0A%5B...%5D`} target='_self' style={link}>
                                {email}
                            </Link>
                            <br />

                            Telefone:{' '}
                            <Link href='tel:11971321587' target='_blank' style={link}>
                                {phone}
                            </Link>
                        </Text>

                        <br />

                        <Text style={paragraph}>
                            Este email de contato foi enviado através do site <Link href={baseURL} style={link}>biocube.app</Link> pelo usuário,
                            <br />
                            @{firstName}{lastName}
                            <span style={{ color: '#6a757b' }}> - {date}</span>
                        </Text>
                    </Section>
                </Container>

                <Section style={footer}>
                    <Row>
                        <Column align='right' style={{ width: '45%', paddingRight: '8px' }}>
                            <Img src={`${baseURL}/assets/instagram.svg`} />
                        </Column>

                        <Column align='center' style={{ width: '10%', paddingRight: '4px', paddingLeft: '4px' }}>
                            <Img src={`${baseURL}/assets/youtube.svg`} />
                        </Column>

                        <Column align='left' style={{ width: '45%', paddingLeft: '8px' }}>
                            <Img src={`${baseURL}/assets/the-cubicle.svg`} />
                        </Column>
                    </Row>

                    <Row>
                        <Text style={{ textAlign: 'center', color: '#6a757b' }}>
                            © 2019 Biocube, Todos os Direitos Reservados
                            <br />
                            889 Avenida Jose Aloisio Filho, Porto Alegre, RS, 90250-180 - BRA
                        </Text>
                    </Row>
                </Section>
            </Body>
        </Html>
    )
}

const fontFamily = 'HelveticaNeue,Helvetica,Arial,sans-serif'

const main = {
    backgroundColor: '#070707',
    fontFamily
}

const logo = {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}
const heading = {
    color: '#ECF0F9',
    fontSize: 26,
    lineHeight: 1.33,
    textAlign: 'center' as const
}
const paragraph = {
    color: '#ECF0F9',
    fontSize: 14,
    lineHeight: 1.5
}
const link = {
    color: '#33BBEE',
    textDecoration: 'underline'
}

const container = {
    maxWidth: '580px',
    backgroundColor: '#111111',
    margin: '30px auto'
}
const content = {
    padding: '5px 20px 10px 20px'
}

const sectionCenter = {
    width: '102px',
    borderBottom: '1px solid #01F26D'
}
const sectionsBorders = {
    width: '100%',
    display: 'flex'
}
const sectionBorder = {
    width: '249px',
    borderBottom: '1px solid #070707'
}

const footer = {
    maxWidth: '580px',
    margin: '0 auto'
}