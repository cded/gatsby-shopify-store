import React from 'react';
import { Box, Heading } from 'rebass';
import styled from '@emotion/styled';
import { Link as GatsbyLink } from 'gatsby';
import Layout from '../components/Layout';
import Collapsible from '../components/Collapsible';
import SEO from '../components/SEO';

const Separation = styled(Box)`
  width: 60%;
  border: 1px solid #e0e0e0;
`;

export default () => {
  return (
    <Layout>
      <SEO
        title="FAQ"
        description="You may find an answer to your questions here."
      />
      <Box
        p={['0', '50px']}
        pt={['50px', '50px']}
        sx={{ minHeight: ['70vh', 0], maxWidth: '1300px', margin: 'auto' }}
      >
        <Heading
          m="auto"
          sx={{
            textAlign: 'center',
            textTransform: 'uppercase',
            maxWidth: '80%',
            fontSize: ['18px', '24px'],
          }}
        >
          Frequently Asked Questions
        </Heading>
        <Separation mx="auto" mt="20px" mb="20px" />
        <Box pl="10%" pr="10%">
          <Box m="0 auto">
            <Collapsible title="Does your furniture come with Instructions and tools?">
              Yes, all LEDCO furniture comes with clear instructions for
              assembly, hardware components and a light control remote. Hammer
              and screwdrivers are not included.
            </Collapsible>
            <Collapsible title="It is safe to provide my credit card and personal information online?">
              It is absolutely safe to use your credit card on our website. All
              sensitive information is transferred using the same encryption and
              physical security used by financial institutions.
            </Collapsible>
            <Collapsible title="Can I cancel an order if I change my mind?">
              If you have a change of heart, you can cancel at any time before
              your item is dispatched/sent to our delivery partners. Simply
              contact us and we'll cancel your order and give you a full refund.
              Cancellations made after the dispatch of your item(s) will need to
              be made at the time of delivery, via a refusal of delivery or
              within 15 days of delivery by contacting us. Once you have
              notified us of your unwanted item, we will arrange for collection
              of the item by our courier, who will advise you of a proposed
              collection date shortly after. You will receive a full refund
              (less return or collection costs set out below) once the product
              has been returned to us.
            </Collapsible>
            <Collapsible title="What if I don’t like the product I ordered when it arrives?">
              No way you don’t like it... really! Simply{' '}
              <GatsbyLink to="/contact">contact us</GatsbyLink> within 15 days
              of receiving your product(s) and we will assist you with the
              return.
            </Collapsible>
            <Collapsible title="Wrong product or color delivered">
              If you receive the wrong product, part or missing pieces{' '}
              <GatsbyLink to="/contact">let us know</GatsbyLink> and we will
              promptly ship replacements at no charge. If you need to return an
              incorrect shipment, we will not charge for any wrong parts or
              products.
            </Collapsible>
            <Collapsible title="What if I'm unsure how to assemble a unit?">
              If you have general assembly questions or concerns we're always
              happy and available to help by e-mail. If you are unsure how to
              assemble we recommend hiring a local furniture assembly service.
            </Collapsible>
            <Collapsible title="What are the accepted methods of payment?">
              We accept PayPal, Visa, MasterCard and American Express.
            </Collapsible>
            <Collapsible title="When will my order be invoiced?">
              Your order will be invoiced as soon as it has been placed.
            </Collapsible>
            <Collapsible title="Will furniture I order arrive assembled?">
              A large majority of hardwood home furnishings come flat-packed
              parcels that require assembly, allowing us to keep our costs down,
              and for ease of transportation In order to provide our customers
              with quality products at great prices.
            </Collapsible>
            <Collapsible title="What shipping options do you offer?">
              We aim to deliver our products in a timely and economical manner.
              Accessories and smaller items ship via FedEx Standard Ground.
              Larger, heavier items are shipped via our in-home delivery
              service.
            </Collapsible>
            <Collapsible title="What should I do if my merchandise arrives damaged or defective?">
              Please <GatsbyLink to="/contact">contact us</GatsbyLink> as soon
              as possible with a detailed description of the issue along with a
              photo. We will take care of the rest.
            </Collapsible>
            <Collapsible title="How much are shipping fees?">
              Shipping fees vary depending on the product and the destination.
            </Collapsible>
            <Collapsible title="What is LEDCO’s return policy?">
              If you are not completely satisfied with your purchase, we will
              gladly accept a return or exchange within 15 days of delivery,
              upon presentation of the original receipt. Refunds will be
              processed based on the original method of payment. The unused item
              must be returned in its original condition and packaging.
            </Collapsible>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
