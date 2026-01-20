import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    // CORS 헤더
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, company, interest, message } = req.body;

    try {
        await resend.emails.send({
            from: 'Bridge H <onboarding@resend.dev>',
            to: 'fatemate2026@gmail.com',
            replyTo: email,
            subject: `[Bridge H 문의] ${name}님의 파트너십 문의`,
            html: `
                <div style="font-family: 'Noto Sans KR', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <div style="background: linear-gradient(135deg, #0f2744 0%, #1a3a5c 100%); padding: 30px; border-radius: 12px 12px 0 0;">
                        <h1 style="color: white; margin: 0; font-size: 24px;">Bridge H 새 문의</h1>
                    </div>
                    <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 12px 12px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #6c757d; width: 120px;">이름</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529; font-weight: 500;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #6c757d;">이메일</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529;">${email}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #6c757d;">회사/기관</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529;">${company || '-'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #6c757d;">관심 솔루션</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529;">${interest || '-'}</td>
                            </tr>
                        </table>
                        <div style="margin-top: 20px;">
                            <p style="color: #6c757d; margin-bottom: 8px;">문의 내용</p>
                            <div style="background: white; padding: 16px; border-radius: 8px; color: #212529; line-height: 1.6;">
                                ${message ? message.replace(/\n/g, '<br>') : '-'}
                            </div>
                        </div>
                    </div>
                </div>
            `
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Resend error:', error);
        return res.status(500).json({ error: error.message });
    }
}
