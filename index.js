import p4 from './src/main';
import cstore from './src/cstore';
import  * as ctypes  from './src/ctypes';
import * as ajax from './src/io/ajax';
import parse from './src/io/parse';

import Babies from './test/data-babies';
import TimeSeries from './test/data-timeseries';

var root = typeof self == 'object' && self.self === self && self ||
           typeof global == 'object' && global.global === global && global ||
           this;

p4.ajax = ajax;
p4.cstore = cstore;
p4.ctypes = ctypes;
p4.parse = parse;
p4.datasets = {Babies, TimeSeries};

root.p4 = p4;
export default root.p4;
export const datasets = {Babies, TimeSeries}
