import chai from 'chai';
import mergeResolvers from '../src/merge_resolvers';
import clientResolvers from './graphql/resolvers/client_resolver';
import productResolvers from './graphql/resolvers/product_resolver';
import vendorResolvers from './graphql/resolvers/vendor_resolver';

const assert = chai.assert;

describe('mergeResolvers', function () {
  describe('with default options', function () {

    it('merges all query resolvers', function () {
      const resolvers = [clientResolvers, productResolvers, vendorResolvers];
      const mergedResolvers = mergeResolvers(resolvers);

      assert.isDefined(mergedResolvers.Query.clients, 'Merged resolvers is missing clients resolver');
      assert.isDefined(mergedResolvers.Query.client, 'Merged resolvers is missing client resolver');
      assert.isDefined(mergedResolvers.Query.products, 'Merged resolvers is missing products resolver');
      assert.isDefined(mergedResolvers.Query.product, 'Merged resolvers is missing product resolver');
      assert.isDefined(mergedResolvers.Query.vendors, 'Merged resolvers is missing vendors resolver');

    });

    it('merges all mutation resolvers', function () {
      const resolvers = [clientResolvers, productResolvers];
      const mergedResolvers = mergeResolvers(resolvers);

      assert.isDefined(mergedResolvers.Mutation.create_client, 'Merged resolvers is missing create_client resolver');
      assert.isDefined(mergedResolvers.Mutation.update_client, 'Merged resolvers is missing update_client resolver');
      assert.isDefined(mergedResolvers.Mutation.create_product, 'Merged resolvers is missing create_product resolver');
      assert.isDefined(mergedResolvers.Mutation.update_product, 'Merged resolvers is missing update_product resolver');

    });

    it('merges all subQuery resolvers', function () {
      const resolvers = [clientResolvers, productResolvers];
      const mergedResolvers = mergeResolvers(resolvers);

      assert.isDefined(mergedResolvers.Client.products, 'Merged resolvers is missing Client.products resolver');
      assert.isDefined(mergedResolvers.Product.clients, 'Merged resolvers is missing Product.clients resolver');

    });
  });
});
