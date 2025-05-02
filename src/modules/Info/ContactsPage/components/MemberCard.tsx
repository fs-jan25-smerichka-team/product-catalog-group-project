import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Link,
  Stack,
  Typography,
} from '@mui/material';

import { cardStyle } from './MemberCardStyles';

import { MemberInfo } from '@/utils/Types';

type Props = {
  memberInfo: MemberInfo;
};

export const MemberCard: React.FC<Props> = ({ memberInfo }) => {
  const { name, photo, about, responsibleFor, contacts } = memberInfo;

  return (
    <Card sx={cardStyle.cardContainer}>
      <CardContent sx={cardStyle.contentContainer}>
        <Stack direction={'column'} spacing={2} sx={cardStyle.headerContainer}>
          <Stack direction={'row'} gap={2} sx={cardStyle.headerInfoContainer}>
            <Avatar alt={name} src={photo} sx={cardStyle.image} />

            <Typography variant="h2" sx={cardStyle.nameText}>
              {name}
            </Typography>
          </Stack>

          <Typography variant="body1" sx={cardStyle.aboutText}>
            {about}
          </Typography>
        </Stack>

        <Divider sx={cardStyle.divider} />

        <Stack sx={cardStyle.responsibleForContainer}>
          {responsibleFor.map((responsible, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={cardStyle.responsibleText}
            >
              {' '}
              - {responsible}
            </Typography>
          ))}
        </Stack>

        <Divider sx={cardStyle.divider} />

        <Stack direction={'row'} gap={4} sx={cardStyle.contactsContainer}>
          {contacts.map(({ label, href }, index) => (
            <Link
              key={index}
              href={href}
              target={label == 'Email' ? '_self' : '_blank'}
              sx={cardStyle.contactLink}
            >
              <Typography variant="body2" sx={cardStyle.contactLabelText}>
                {label}
              </Typography>
            </Link>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};
