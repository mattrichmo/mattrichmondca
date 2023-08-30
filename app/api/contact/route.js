const { NextResponse } = require('next/server');
const { SMTPServer } = require('smtp-server');
const { WritableStreamBuffer } = require('stream-buffers');
const nodemailer = require('nodemailer');

module.exports = async function POST(request) {
  /* 
  try {
    const body = await request.json();
    console.log(body);
    
    // Prepare server options
    const options = {
      secure: false,
      authOptional: true,
      onData: (stream, session, callback) => {
        let buffer = new WritableStreamBuffer();
        stream.pipe(buffer);
        stream.on('end', () => {
          let raw = buffer.getContentsAsString('utf8');
          // Now raw contains the raw email content
          console.log(raw);
          callback(null, 'Message queued as abcdef'); // accept the message once the stream is ended
        });
      }
    };
    
    // Create a new SMTP server
    const server = new SMTPServer(options);
    
    // Listen on a specific port
    server.listen(2525);
    
    // Send email using nodemailer
    const transporter = nodemailer.createTransport({
      port: 2525,
      ignoreTLS: true,
      pool: true,
    });

    const mailOptions = {
      from: 'formsubmission@mattrichmond.ca',
      to: 'forms@mattrichmond.ca',
      subject: 'Form Response',
      text: JSON.stringify(body, null, 2), // Convert to pretty JSON string
    };

    await transporter.sendMail(mailOptions);
    
    // Close the server
    server.close();

    return NextResponse.json({ message: 'Email sent and form response logged' });
  } catch (error) {
    console.error('Error handling request:', error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  } */
};
