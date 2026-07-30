import { businessContact } from '../data/businessData';

export const downloadVCard = () => {
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${businessContact.name}
ORG:${businessContact.name}
TITLE:${businessContact.subtagline}
TEL;TYPE=CELL,VOICE:${businessContact.phone}
EMAIL;TYPE=INTERNET,PREF:${businessContact.email}
URL:${businessContact.websiteUrl}
NOTE:${businessContact.tagline}
END:VCARD`;

  const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${businessContact.name.replace(/\s+/g, '_')}.vcf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
