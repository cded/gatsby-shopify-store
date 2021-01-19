import React from 'react';
import { Box, Text } from 'rebass';
import { Link as GatsbyLink } from 'gatsby';

const Breadcrumbs = ({
  productTitle,
  collectionTitle,
  collectionPath,
  separator,
}) => {
  return (
    <Box
      fontSize={[2]}
      itemScope
      itemType="https://schema.org/BreadcrumbList"
      mt={[0, '22px']}
    >
      <Box
        as="span"
        itemProp="itemListElement"
        itemScope
        itemType="https://schema.org/ListItem"
      >
        <Text
          as={GatsbyLink}
          to="/"
          itemProp="item"
          variant="link"
          color="darkPrimaryBlue"
        >
          <Text as="span" itemProp="name">
            Home
          </Text>
        </Text>
        <meta itemProp="position" content="1" />
      </Box>

      {collectionPath && collectionTitle ? (
        <Box as="span">
          <Text
            as="span"
            mx={1}
            variant="link"
            color="darkPrimaryBlue"
            fontSize="18px"
            fontWeight="bold"
          >
            {separator}
          </Text>
          <Box
            as="span"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <Text
              as={GatsbyLink}
              to={`${collectionPath}/`}
              // mr={1}
              itemProp="item"
              variant="link"
              color="darkPrimaryBlue"
            >
              <Text as="span" itemProp="name">
                {collectionTitle}
              </Text>
            </Text>
            <meta itemProp="position" content="2" />
          </Box>
        </Box>
      ) : (
        ''
      )}

      {productTitle ? (
        <Box as="span">
          <Text
            as="span"
            mx={1}
            color="darkPrimaryBlue"
            fontSize="18px"
            fontWeight="bold"
          >
            {separator}
          </Text>
          <Box
            as="span"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <Text as="span" itemProp="name">
              {productTitle}
            </Text>
          </Box>
          <meta itemProp="position" content="3" />
        </Box>
      ) : (
        ''
      )}
    </Box>
  );
};

export default React.memo(Breadcrumbs);
